from rdkit import Chem, DataStructs
from rdkit.Chem import Descriptors, Crippen, rdMolDescriptors, AllChem
import sascorer  # Ensure you have sascorer and fpscores.pkl.gz in your directory

# Load the SDF file
sdf_file = "./output_data/new_molecules.sdf"
supplier = Chem.SDMolSupplier(sdf_file)

# Reference molecule for Tanimoto similarity
reference_smiles = "C[N+](C)(C)CCO[P@@](=O)(O)OC[C@H](O)CO"  # Example SMILES of an Alzheimer's drug
reference_mol = Chem.MolFromSmiles(reference_smiles)
reference_fp = AllChem.GetMorganFingerprintAsBitVect(reference_mol, 2, 2048)

# Open a text file to save the results
output_file = "./output_data/analogue_metrics.txt"
with open(output_file, "w") as file:
    file.write("Generated Analogs and Their Metrics:\n")
    file.write("=" * 50 + "\n")

    # Iterate through the molecules and calculate properties
    for idx, mol in enumerate(supplier):
        if mol is not None:
            smiles = Chem.MolToSmiles(mol)
            mol_weight = Descriptors.MolWt(mol)
            logp = Descriptors.MolLogP(mol)
            qed = Descriptors.qed(mol)
            sascore = sascorer.calculateScore(mol)

            # Calculate Lipinski's Rule of Five metrics
            h_acceptors = rdMolDescriptors.CalcNumHBA(mol)
            h_donors = rdMolDescriptors.CalcNumHBD(mol)
            rotatable_bonds = rdMolDescriptors.CalcNumRotatableBonds(mol)
            lipinski = (
                mol_weight <= 500
                and logp <= 5
                and h_acceptors <= 10
                and h_donors <= 5
            )

            # Calculate Tanimoto similarity
            mol_fp = AllChem.GetMorganFingerprintAsBitVect(mol, 2, 2048)
            tanimoto = DataStructs.TanimotoSimilarity(reference_fp, mol_fp)

            # Write each molecule's SMILES and metrics to the file
            file.write(f"Analogue {idx + 1}:\n")
            file.write(f"SMILES: {smiles}\n")
            file.write(f"Molecular Weight: {mol_weight}\n")
            file.write(f"LogP: {logp}\n")
            file.write(f"QED: {qed}\n")
            file.write(f"SAscore: {sascore}\n")
            file.write(f"Hydrogen Bond Acceptors: {h_acceptors}\n")
            file.write(f"Hydrogen Bond Donors: {h_donors}\n")
            file.write(f"Rotatable Bonds: {rotatable_bonds}\n")
            file.write(f"Lipinski's Rule of Five: {'Pass' if lipinski else 'Fail'}\n")
            file.write(f"Tanimoto Similarity: {tanimoto}\n")
            file.write("-" * 50 + "\n")

print(f"Metrics for all analogues have been saved to {output_file}")

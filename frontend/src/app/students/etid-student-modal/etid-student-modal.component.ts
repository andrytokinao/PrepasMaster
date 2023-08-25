import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Apollo} from "apollo-angular";
import {SaveStudentsDocument, UserApp} from "../../index/index-student";

@Component({
  selector: 'app-etid-student-modal',
  templateUrl: './etid-student-modal.component.html',
  styleUrls: ['./etid-student-modal.component.css']
})
export class EtidStudentModalComponent {
  private newStudent:  UserApp ={
    id: 200,
    adress: "undefined",
    anneeBac: "undefined",
    cin: "undefined",
    contact: "undefined",
    email: "undefined",
    firstname: "undefined",
    lastname: "undefined",
    username: "undefined"

  };
  constructor(
    public dialogRef: MatDialogRef<EtidStudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apollo: Apollo
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick() {
    alert("begen save")
    this.apollo.mutate({
      mutation: SaveStudentsDocument,
      variables: {
        input: {
          firstName: this.newStudent.firstname,
          lastName: this.newStudent.lastname,
          // ... autres champs de l'étudiant ...
        },
      },
    }).subscribe(
      ({ data }) => {
        // La mutation a été exécutée avec succès, traitez les données ici si nécessaire
        alert('Étudiant enregistré avec succès:');
      },
      (error) => {
        // Une erreur s'est produite lors de l'exécution de la mutation, traitez l'erreur ici si nécessaire
        const errorJson = JSON.stringify(error);
        alert('Erreur lors de l\'enregistrement de l\'étudiant: ' + errorJson);

      }
    );
  }
}

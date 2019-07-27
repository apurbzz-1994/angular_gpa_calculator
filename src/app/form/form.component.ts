//this component handles the about section of my web application
import { Component } from '@angular/core';

//decorator
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent{
    firstGrade: string = "HD";
    firstCredit: string = "4";

    secondGrade: string = "HD";
    secondCredit: string = "4";

    thirdGrade: string = "HD";
    thirdCredit: string = "4";

    fourthGrade: string = "HD";
    fourthCredit: string = "4";

    findGradeScore(grade: string){
        var gradeNumber = 0;
        
        switch (grade) {
            case "HD":
                gradeNumber = 4;
                break;
            case "D":
                gradeNumber = 3;
                break;
            case "C":
                gradeNumber = 2;
                break;
            case "P":
                gradeNumber = 1;
                break;
            default:
                gradeNumber = 0;
                break;
        }

        return gradeNumber;
    }

    calculateSingleGPA(grd: string, credit: string){
        var score = this.findGradeScore(grd);
        var singleGPA = score * parseInt(credit);

        return singleGPA;
    }

    calculateTotalGPA(){
        var firstGPA = this.calculateSingleGPA(this.firstGrade, this.firstCredit);
        var secondGPA = this.calculateSingleGPA(this.secondGrade, this.secondCredit);
        var thirdGPA = this.calculateSingleGPA(this.thirdGrade, this.thirdCredit);
        var fourthGPA = this.calculateSingleGPA(this.fourthGrade, this.fourthCredit);
        console.log(this.firstCredit);
        console.log(this.secondCredit);
        var totalCredits = parseInt(this.firstCredit) + parseInt(this.secondCredit) + parseInt(this.thirdCredit) + parseInt(this.fourthCredit);
        console.log(totalCredits);

        var answer = (firstGPA + secondGPA + thirdGPA + fourthGPA) / totalCredits;

        return answer;
    }

    
}
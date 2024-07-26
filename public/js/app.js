// * treatment class
class Treatment{
    constructor(treatmentName, illnesFor,price){
        this.treatmentName=treatmentName
        this.illnesFor=illnesFor
        this.price=price
       
    }

}


// todo Declation of treatment

let indentation = new Treatment(`Ctrl+Shift+F`, "Indentation Error",60)
let unsave = new Treatment(`SaveOnFocusChange`," Unsave  ",100)
let eror404 = new Treatment(`CheckLinkRelation`," 404  ",35 )
let asmathic = new Treatment( `Ventolin`, "Asthmatic",40)
let syntaxEror = new Treatment(  `F12+Doc` , "ASyntax Error",20)

let treatments = [indentation,unsave,eror404,asmathic,syntaxEror]





class Doctors{
    constructor(name, money, office,curretPatient){
        this.name=name
        this.money=money
        this.office=office
        this.curretPatient=curretPatient
   
    }
    diagnosis( patient , treatment){ 
     console.log(`${patient.name} is diagnoses with ${patient.illnesFor} and he should take ${patient.treatmentName}`);
    }
    patientIn(){
        
    }

    patientOut(){

    }
}
class Place {
    constructor(name,people ){
        this.name = name
        this.people =people
    }
}
let doctor = new Doctors("Alfred",[], [])
let office1= new Place("Office 1",[])
let pharmacy = new Place("Pharmacy",[])
let MyPlaces= [office1, pharmacy]





class Patient {
    constructor(name,illness,money,pocket, healthState, treatment){
        this.name=name
        this.illness=illness
        this.money=money
        this.pocket=pocket
        this.healthState=healthState
        this.treatment=treatment
    }
    go_To(place){
        this.office= place.name
        console.log(`${this.name} goes to consult  at ${place.name} with Dr ${doctor.name} `);
        
    }
    takeCare(patient){
        // let treatmentPrices = treatments[patient.price]
    


    }
    pay(){
        let amountConsultation = 50
        if (this.money >= amountConsultation) {
            this.money -= amountConsultation
            console.log(`${this.name} paid ${amountConsultation} € for his consultaion . Remaining money: ${this.money}€. `);
            
        } else {
            console.log(`${this.name} does'nt have enough money to pay ${amountConsultation}€`);
            
        }
     
    }
}

// & Declaration  
let patient_1 = new Patient("Marcus","Indentation Error",100,"Empty","Ill")
let patient_2 = new Patient("Optimus","Unsave",200,"Empty","Ill")
let patient_3 = new Patient("Sandoku","404",80,"Empty","Ill")
let patient_4 = new Patient("DarrthVader","Asmathic",110,"Empty","Ill")
let patient_5= new Patient("Semicolon","Syntax Error",60,"Empty","Ill")



// ? Display
patient_1.go_To(office1)
doctor.diagnosis(syntaxEror)
patient_1.pay()

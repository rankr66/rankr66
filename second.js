let userform = document.getElementById("user-form");
let userentries = [];

const retrivedetails = () => {
    let deatails = localStorage.getItem("user-data");

    if(deatails){
        deatails = JSON.parse(deatails);
    }
    else{
        deatails = [];
    }
    return deatails;
}

let userdetails = retrivedetails();

const displaydetails = () => {
    const deatails = retrivedetails();

    const TableDetails = deatails.map((detail) =>{
         const nameCell = `<td>${detail.name}</td>`;
         const emailCell = `<td>${detail.email}</td>`;
         const passCell = `<td>${detail.password}</td>`;
         const dobCell = `<td>${detail.dob}</td>`;
         const tccell = `<td>${detail.acceptTerms}</td>`;

         const row = `<tr>${nameCell} ${emailCell} ${passCell} ${dobCell} ${tccell}</tr>`;

         return row;
    }).join("\n");

    const table =`<table><tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>DoB</th>
    <th>Accepted terms?</th>
    </tr>${TableDetails}</table>`

    let d_details = document.getElementById("user-data");
    d_details.innerHTML = table; 
}

const saveuserdetails = (form) =>{
    form.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;

    const acceptTerms = document.getElementById("acceptTerms").checked;

    const form_Data = {
        name,
        email,
        password,
        dob,
        acceptTerms
    };

    userentries.push(form_Data);

    localStorage.setItem("user-data",JSON.stringify(userentries));
    displaydetails();

}

userform.addEventListener("submit",saveuserdetails);
displaydetails();
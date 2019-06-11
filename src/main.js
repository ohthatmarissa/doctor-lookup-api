import { DoctorService } from './doctors.js';
import $ from 'jquery';


$(document).ready(function() {
  $('#doctorQuery').click(function(event) {
    event.preventDefault();
    let query = $('#query').val();
    $('#query').val("");
    console.log(query);


    let newDoctorService = new DoctorService();  // create instance of DoctorService class
    let promise = newDoctorService.getDoctorByQuery(query);  // call the instance method and pass in user input
    promise.then(function(response) {
      let body = JSON.parse(response);
      
      if(body.data.length > 0) {
        $('#searchResults').text(' ');
      
        for(let i=0; i<body.data.length; i++) {
          if (body.data[i].practices[0].accepts_new_patients == true) {
            $('#searchResults').append("<ul>" + "<li>" + "Doctor: " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + "Specialties: " + body.data[i].specialties[0].specialty_uid + "<br>" + "Phone Number: " + body.data[i].practices[0].phones[0].number + "<br>" + "Practice Website: " + body.data[i].practices[0].website + "<br>" + "Accepting New Patients" + "</li>" + "</ul>");
          } else {
            $('#searchResults').append("<ul>" + "<li>" + "Doctor: " + body.data[i].profile.first_name + " " + body.data[i].profile.last_name + "<br>" + "Specialties: " + body.data[i].specialties[0].specialty_uid + "<br>" + "Phone Number: " + body.data[i].practices[0].phones[0].number + "<br>" + "Practice Website: " + body.data[i].practices[0].website + "<br>" + "NOT Accepting New Patients" + "</li>" + "</ul>");
          }
        }
      } else {
        $('#searchResults').text('No Doctors Match Your Search');
      }
      return newDoctorService.getDoctorByQuery(query);
    });
  });

});
// f01cd61ef76432e58af10a28661bec99

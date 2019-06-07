import { DoctorService } from './doctors.js';
import $ from 'jquery';

$(document).ready(function() {
  $('#doctorQuery').click(function() {
    let query = $('#query').val();
    $('#query').val("");
    console.log(query);


    let doctorService = new DoctorService();  // create instance of WeatherService class
    let promise = doctorService.getDoctorByQuery(query);  // call the instance method and pass in user input

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showDoctor').text(`The Doctors in ${query} are ${body.data.profile.first_name}%`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
// f01cd61ef76432e58af10a28661bec99
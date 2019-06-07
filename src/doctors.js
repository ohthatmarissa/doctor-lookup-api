export class DoctorService {
    getDoctorByQuery(query) {
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=wa-seattle&limit=10&user_key=f01cd61ef76432e58af10a28661bec99`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    }
  }

  
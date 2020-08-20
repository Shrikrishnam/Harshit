import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private userService: UserService) { }
  allAppointments = [
    {
      "firstname": "test test",
      "lastname": "test",
      "age": 24,
      "email": "test@test.com",
      "phonenumber": 9988776655,
      "streetaddress": "test",
      "city": "test",
      "state": "test",
      "country": "india",
      "pincode": 560058,
      "trainerpreference": "Male Trainer",
      "physiotherapist": "Yes",
      "packages": "500",
      "inr": 1000,
      "paisa": 10,
      "id": 1
    }
  ];

  details = {};

  ngOnInit() {
    this.getfitness();
  }

  getfitness() {
    this.userService.getfitnessdata().subscribe(data => {
      if(data) {
        this.allAppointments = data;
      }
    })
  }
  getSpecific(details) {
    this.details = details;
  }
  editfitness() {

  }
  deletefitness(id) {
    if (confirm("Are you sure to delete the appointment with id: " + id)) {
      this.userService.deletefitnessdata(id).subscribe(() => {
        alert('Deletion Successful!!!');
        this.getfitness();
      });
    }
  }
}

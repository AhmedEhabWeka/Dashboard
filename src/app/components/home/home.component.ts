import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: string = '';
  constructor(private _AuthService: AuthService) {
    this._AuthService.currentUserData.subscribe(() => {
      if (_AuthService.currentUserData.getValue() != null) {
        this.user = this._AuthService.currentUserData.value.first_name;
      }

    })
  }

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {

    title: {
      text: 'Egypt Population Growth in the last decade'
    },
    subtitle: {
      text: 'Source: statista.com'
    },
    xAxis: {
      categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      tickmarkPlacement: 'on',
    },
    yAxis: {
      title: {
        text: 'Millions'
      },
      categories: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110'],
    },
    tooltip: {

      valueSuffix: ' millions'
    },
    series: [{
      name: 'Total Population',
      data: [82.76, 84.53, 86.42, 88.4, 90.42, 92.44, 94.45, 96.44, 98.42, 100.39, 102.33,],
      type: 'line'

    }, {
      name: 'Males',
      data: [41.81, 42.71, 43.67, 44.67, 45.7, 46.72, 47.73, 48.74, 49.73, 50.72, 51.7,],
      type: "line"
    }, {
      name: 'Females',
      data: [40.96, 41.82, 42.75, 43.73, 44.73, 45.72, 46.72, 47.71, 48.69, 49.67, 50.63,],
      type: "line"
    },]
  }

  ngOnInit(): void {
  }

}



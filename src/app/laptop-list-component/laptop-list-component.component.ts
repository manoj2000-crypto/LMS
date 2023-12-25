import { Component, OnInit } from '@angular/core';
import { Laptop } from '../laptop';
import { LaptopService } from '../laptop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop-list-component',
  templateUrl: './laptop-list-component.component.html',
  styleUrl: './laptop-list-component.component.css'
})
export class LaptopListComponentComponent implements OnInit {
  laptops: Laptop[] = [];

  constructor(private laptopService: LaptopService, private router: Router){ }

  ngOnInit(): void {
    this.getLaptops();
  }

  private getLaptops()
  {
    this.laptopService.getLaptopsList().subscribe(data => { 
      this.laptops = data;
    });
  }

  laptopDetails(laptopId: number)
  {
    this.router.navigate(['laptop-details', laptopId]);
  }

  updateLaptop(laptopId: number)
  {
    this.router.navigate(['update-laptop', laptopId]);
  }

  deleteLaptop(laptopId: number)
  {
    this.laptopService.deleteLaptop(laptopId).subscribe(data => {
      console.log(data);
      this.getLaptops();
    });
  }
}

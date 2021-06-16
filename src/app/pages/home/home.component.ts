import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { COPYFILE_FICLONE_FORCE } from 'constants';
import { url } from 'inspector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
randomIndex = Math.floor(Math.random() *this.arrayImages.lenght);
sourceImage = this.arrayImages[this.randomIndex];




import { Component } from '@angular/core';
import  { ICases, GlobalCasesInterface } from './cases';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import { CasesServices } from './cases.services';

@Component({
	selector: 'pm-cases',
	templateUrl: './cases-list.component.html',
	styleUrls: ['./cases-list.component.css']
})


export class CovidCasesListComponent {
	pageTitle: string = 'Covid-19 Live Update';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	_listFilter: string;

	get listFilter(): string {
		return this._listFilter;
	}

	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredCases = this.listFilter ? this.performFilter(this.listFilter) : this.cases;
	}

	filteredCases: ICases[];
	filteredGlobalCases: GlobalCasesInterface[];
	errorMessage: string;
	cases: ICases[] = [	];
	globalData: GlobalCasesInterface[] = [];

	constructor(private caseService: CasesServices) {

	}

	performFilter(filterBy: string): ICases[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.cases.filter((cases: ICases) =>
			cases.country.toLocaleLowerCase().indexOf(filterBy) !== -1	);
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	ngOnInit(): void {
	this.caseService.getCases().subscribe({
      next: cases => {
        this.cases = cases;
        this.filteredCases = this.cases;
      },
      error: err => this.errorMessage = err
    });

	this.caseService.getGlobalCases().subscribe({
      next: globalData => {
        this.globalData = globalData;
        this.filteredGlobalCases = this.globalData;
      },
      error: err => this.errorMessage = err
    });
	}
}


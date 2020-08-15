export interface ICases {
	 country:string,
	cases:number,
	todayCases:number,
	deaths:number,
	todayDeaths:number,
	recovered:number,
	active:number,
	critical:number,
	casesPerOneMillion:number,
	deathsPerOneMillion:number,
	totalTests:number,
	testsPerOneMillion:number,
}

export interface GlobalCasesInterface {
	cases: number,
	deaths: number,
	recovered:number
}
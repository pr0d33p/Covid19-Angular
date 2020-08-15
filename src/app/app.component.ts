import{ Component } from '@angular/core';

@Component({
	selector: 'pm-root',
	template: `
	<nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand text-center" href="#">
                Covid-19 Live Update
            </a>
        </nav>
			<pm-cases></pm-cases>
	`
})

export class AppComponent {
	pageTitle: string = "Product Management";
}
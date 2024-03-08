import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
})
export class DocumentDetailComponent {
 document: Document;
 id: string;
 nativeWindow: any;


 constructor(
  private documentService: DocumentsService,
  private router: Router,
  private route: ActivatedRoute,
  ) {
  
}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    this.id = params.id;
    this.document = this.documentService.getDocument(this.id);  
  });
}


}

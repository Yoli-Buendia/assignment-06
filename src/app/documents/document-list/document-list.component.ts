import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {

  documents: Document[] =[];

  onSelectedDocument(document: Document){
    this.documentService.documentSelectedEvent.emit(document);
  }

  constructor(private documentService: DocumentsService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentSelectedEvent = new EventEmitter<Document>();
  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  private documents : Document[] = [];

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  /*getDocument(id: string): Document {
    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
   }*/
   getDocument(id: string): Document {
    this.documents.forEach((document)=>{
      if (document.id === id) {
        return document;
      }
    })
    return null;
    console.log("get doc running");
   }
  /*getDocument(id: string): Document {
    return this.documents.find((c) => c.id === id);
  }*/

}

import { Injectable } from '@angular/core';
import { Authors } from '../authorModel/author.model';
import { Book } from 'src/app/books/model/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  
  private authors: Authors[] = [
    new Authors(1, 'Bob', 'T', [new Book(1001, 'Tech', 'Introduction to Angular', 50.25, [], 2017)], 'Expert en Angular et développement web.'),
    new Authors(2, 'Jane', 'C', [new Book(1003, 'Kids', 'A Fantastic Story', 12.25, [], 2009)], 'Auteur prolifique dans le domaine de la littérature pour enfants.'),
    new Authors(3, 'Chef', 'Z', [new Book(1004, 'Cook', 'The Best Shawarmas', 18.99, [], 1978)], 'Chef célèbre et auteur de livres de cuisine.')
  ];

  
  getAuthor(id: number): Observable<Authors | null> {
    const author = this.authors.find(a => a.id === id) || null;
    return of(author);
  
    
    
  } 

}

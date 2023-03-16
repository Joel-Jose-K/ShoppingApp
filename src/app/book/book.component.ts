import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book; // input/data coming from the parent
  // @Output() bookEmitter = new EventEmitter<Book>();

  isInCart: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}

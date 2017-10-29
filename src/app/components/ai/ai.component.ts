import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

import { AiService } from '../../service/ai.service';
import { Message } from '../../model/message';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent implements OnInit {
    allMessages: Observable<Message[]>;
    formInput: string;

    constructor(public ai: AiService) { 
    }

    ngOnInit() {
      this.allMessages = this.ai.conversation.asObservable()
          .scan((acc, val) => acc.concat(val) );
    }

    sendMessageToBot() {
      this.ai.converse(this.formInput);
      this.formInput = '';
    }
}
  
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiAiClient } from 'api-ai-javascript';
import { Message } from '../model/message'

@Injectable()
export class AiService {
    readonly token = environment.dialogflow.angularAIBot;
    readonly client = new ApiAiClient({ accessToken: this.token });
    
    conversation = new BehaviorSubject<Message[]>([]);
    
    constructor() {       
    }
    
    converse(msg: string) {
        const userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return this.client.textRequest(msg)
        .then(res => {
            const speech = res.result.fulfillment.speech;
            const botMessage = new Message(speech, 'bot');
            this.update(botMessage);
        });
    }
    
    update(msg: Message) {
        this.conversation.next([msg]);
    } 
}

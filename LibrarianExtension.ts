import { UniversityLibrarian } from './classes'


declare module './classes'{

    interface UniversityLibrarian{
        phone: string;
        hostSeminar(topic: string): void;
    }
}

UniversityLibrarian.prototype.hostSeminar = function(topic){
    console.log(`Hosting seminar on ${topic}`)
} 
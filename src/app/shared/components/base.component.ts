import { OnDestroy } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {

    private _destroyed: ReplaySubject<any> = new ReplaySubject();

    public get componentDestroyed$(): Observable<any> {
        return this._destroyed.asObservable();
    }

    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.unsubscribe();
    }
}

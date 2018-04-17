const Rx = require('rxjs/Rx');
const os = require('os');

let checkSystemObservable = Rx.Observable.create(observer => {
    observer.next('Checking your system...');

    // console.log('Total mem:'+os.totalmem());
    // console.log('Total cpu:'+os.cpus().toString());
    if(os.totalmem() / 1000000000 < 8) {
        observer.next('This app needs at least 2GB of RAM');
        return;
    }
    if(os.cpus().length < 4) {
        observer.next('Processor is not supported');
        return;
    }
    observer.next('System is checked successfully.');
});

let subscription = checkSystemObservable.subscribe(value => console.log(value));
subscription.unsubscribe();
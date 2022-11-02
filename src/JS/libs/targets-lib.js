const dataTargets = document.querySelectorAll("[data-target]");
let elem = [];
dataTargets.forEach(element => {
    elem.push(document.querySelector(`[data-labelledby="${element.getAttribute('data-target')}"]`));
});

for (let i = 0; i < dataTargets.length; i++) {
    dataTargets[i].addEventListener('click', (e) => {
        switch (dataTargets[i].getAttribute('data-target-type')) {
            case 'toggle':
                dataTargets[i].classList.toggle('active');
                elem[i].classList.toggle('active');
                console.log('ok');
                break;
            case 'add':
                dataTargets[i].classList.add('active');
                elem[i].classList.add('active');
                break;
            case 'remove':
                dataTargets[i].classList.remove('active');
                elem[i].classList.remove('active');
                break;
            case 'dropdown':
                dataTargets[i].classList.toggle('active');
                elem[i].classList.toggle('active');
                document.body.addEventListener('click', function tape(e) {
                    if (e.target != dataTargets[i]) {
                        dataTargets[i].classList.remove('active');
                        elem[i].classList.remove('active');
                        document.body.removeEventListener('click', tape);
                    }
                });
                break;
            default:
                dataTargets[i].classList.toggle('active');
                elem[i].classList.toggle('active');
                console.log('ok');
                break;
        }
    })
}
export function getAllDogs() {
    const url = '/dogs';
    return fetch(url);
}

export function getDogNumberTwo() {
    const url = '/dogs/2'
    return fetch(url);
}

export function postNewDog() {
    const url = '/dogs';
    const newDog = {
        name: 'Ken',
        age: '99'
    }
    const resBody = new URLSearchParams(newDog);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: resBody,
    }

    return fetch(url, options);
}

export function postNewDogV2(name, age) {
     const url = '/dogs';
     const newDog = {
        name: name,
        age: age
     }
     const resBody = new URLSearchParams(newDog);
     const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: resBody,
    }

    return fetch(url, options);
}

export function deleteDog(id) {

    return fetch(`/dogs/${id}/delete`, {
        method: 'POST',
        headers: {'AUTH': 'ckyut5wau0000jyv5bsrud90y'}
    })
}

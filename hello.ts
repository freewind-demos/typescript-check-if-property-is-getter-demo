const user = {
    name: 'typescript',
    get upperName() {
        console.log("called this getter!!!")
        return this.name.toUpperCase();
    },
}

function main() {
    for (const propertyName of Object.keys(user)) {
        console.log('### ', propertyName);
        const descriptor = Object.getOwnPropertyDescriptor(user, propertyName)
        console.log('### descriptor', descriptor);

        if (descriptor !== undefined && typeof descriptor.get === 'function') {
            console.log(`### "${propertyName}" is a getter!`)
        }
    }
}

main();

const {
    Command,
    CommandBus,
    CommandHandlerMiddleware,
    ClassNameExtractor,
    InMemoryLocator,
    HandleInflector,
    LoggerMiddleware
} = require('simple-command-bus');
const {createEventService} = require("../../services/events.service");

// CreateAccount Command
class CreateEventCommand extends Command {
    constructor(evenType, storageId) {
        super();
        this.eventType = evenType;
        this.storageId = storageId;
    }

    getPayload() {
        return {
        eventType:this.eventType,
        storageId:this.storageId,
    }
}
}

// CreateEvent Handler
class CreateEventHandler {
    async handle(command) {
        // Logic to create an account.
        try {
            console.log('command handler event')
            const eventPayload = command.getPayload();
            console.log(`eventPayload ${eventPayload}`)
            const result = await createEventService(eventPayload);
            console.log(result);
        }catch (error) {
            console.log(error)
        }
    }
}

// Handler middleware
const commandHandlerMiddleware = new CommandHandlerMiddleware(
    new ClassNameExtractor(),
    new InMemoryLocator({CreateEventHandler: new CreateEventHandler()}),
    new HandleInflector()
);

// Command bus instance
const commandBus = new CommandBus([
    new LoggerMiddleware(console),
    commandHandlerMiddleware
]);

const createEventCommand = new CreateEventCommand('NEW_CIGARETTE_BUTT_STORED', 'storage 1');
const result =  commandBus.handle(createEventCommand).then((result)=> {
    console.log(result)
});
console.log('Result:', result);


import messagesReducer from "./messages";
import { addMessage, ADD_MESSAGE } from "../actions/messages";
import AUTHORS from "../../constants";

describe("msgReducer", () => {
    it("check state", () => {
        const expect = {
            messages: [],
            request: {
                status: ADD_MESSAGE,
                error: null,
            }
        }
    
        const received = messagesReducer(undefined, addMessage());
        expect(received).toEqual(expect);
    });
})


describe('tests', () => {
    var a = true;

    it('should be equal to true', () => {
        a = true;
        expect(a).toBeTruthy();
    });
});

describe('enterPres', () => {
    it('should call addItem if enter key is pressed', () => {
        var event = {
            keyCode: 13
        };
        var spyOnFunction = spyOn(this, "addItem");

        enterPress(event);

        expect(spyOnFunction).toHaveBeenCalled();
    });

    it('should call addItem if enter key is pressed', () => {
        var event = {
            keyCode: 11
        };
        var spyOnFunction = spyOn(this, "addItem");

        enterPress(event);

        expect(spyOnFunction).not.toHaveBeenCalled();
    });
});
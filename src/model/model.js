class baseModel {
    constructor(data) {
        this.data = data;
    }
}

class SuccessModel extends baseModel {
    constructor(data) {
        super(data)
        this.code = 0;
    }
}

class FailModel extends baseModel {
    constructor(data) {
        super(data);
        this.code = -1;
    }
}

module.exports = {
    SuccessModel, 
    FailModel
}
export default {
    'POST /api/login': (req, res) => {
        res.end(JSON.stringify({
            data: {},
            code: 0
        }));
        
    },

    'POST /api/auth/logout': (req, res) => {
        res.end(JSON.stringify({
            data: {},
            code: 1
        }));
    }

};
export default {
    'GET /api/signs': (req: any, res: any) => {
      res.json({
        code: 20000,
        data:  [
            {
                id: 0,
                name: 'Webkit'
            },
            {
                id: 1,
                name: 'Git'
            },
        ],
        message: 'success'
      });
    }
};
  
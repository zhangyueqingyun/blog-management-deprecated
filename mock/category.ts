export default {
    'GET /api/categories': (req: any, res: any) => {
      res.json({
        code: 20000,
        data:  [
            {
                id: 0,
                name: '技术'
            },
            {
                id: 1,
                name: '踩坑记录'
            },
            {
                id: 2,
                name: '感悟'
            },
            {
                id: 3,
                name: '生活'
            },
        ],
        message: 'success'
      });
    }
  };
  
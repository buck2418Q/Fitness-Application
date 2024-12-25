import { getTrainerDetails } from "../services/HomeService.js";

export const GetTrainerDetails = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1; // Default to page 1
        const pageSize = parseInt(req.query.pageSize, 10) || 10; // Default page size
        const { trainerData, totalRecords } = await getTrainerDetails(page, pageSize);
        res.status(200).send({
            trainerData,
            totalRecords,
            currentPage: page,
            totalPages: Math.ceil(totalRecords / pageSize),
        });
    } catch (e) {
        res.status(500).send({
            error: e.message,
        });
    }
};



//  to handle large data 
// export const getTrainerDetailsStream = async (res) => {
//     try {
//         const cursor = TrainerModel.find({}, 'firstName lastName serviceType instaId facebook twitter').cursor();

//         // Stream the data as it’s being read
//         cursor.on('data', (doc) => {
//             res.write(JSON.stringify(doc) + '\n');
//         });

//         cursor.on('end', () => {
//             res.end();
//         });

//         cursor.on('error', (err) => {
//             res.status(500).send({ error: err.message });
//         });
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// };

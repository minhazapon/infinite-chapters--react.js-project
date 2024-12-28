import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";


const Chart = () => {


    const data = [

        { "book_name": "One Hundred Years of Solitude", "pages": 500 },
        { "book_name": "Pride and Prejudice", "pages": 328 },
        { "book_name": "The Alchemist", "pages": 281 },
        { "book_name": "1984", "pages": 432 },
        { "book_name": "The Little Prince", "pages": 635 },
        { "book_name": "The Kite Runner", "pages": 1225 },
        { "book_name": "Crime and Punishment", "pages": 277 },
        { "book_name": "Life of Pi", "pages": 310 },
        { "book_name": "The Book Thief", "pages": 1000 }

    ]
      



    return (
        <div className=" chart-div ">
        <div>
        <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="book_name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="book_name" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pages" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="pages" stroke="#ff7300" />
        </ComposedChart>
        </div>    
        </div>
    );
};

export default Chart;
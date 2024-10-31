import { web } from "../application/web";

const PORT = process.env.PORT || 3000;

web.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
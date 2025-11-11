export const getBaseUrl = () => {
	if (process.env.NEXTAUTH_URL) {
		return process.env.NEXTAUTH_URL;
	}

	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	return `http://localhost:3000`;
};

const getMongoUri = () => {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI; // production / vercel
  	return "mongodb://localhost:27017/products"; 
};

export default getMongoUri;

import jwt from "jsonwebtoken";


const authenticate = (req, res, next) => {
  const token = req.cookies.token; // Assumes you're using cookies to store JWT

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access. No token provided.",
      success: false,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // Verify the token
    console.log("the decoded id",decoded)
    
    // Ensure the decoded token contains userId
    if (!decoded.userId) {
      return res.status(401).json({
        message: "Invalid token structure.",
        success: false,
      });
    }
    
    req.userId = decoded.userId; // Attach the userId to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export default authenticate;

module.exports.createPost = (req, res, next) => {
  if (!req.body.title) {
    req.flash("error", "Vui lòng nhập tiêu đề!");

    const referer = req.get("Referer");
    res.redirect(referer || "/admin/products"); 

    return; 
  }

  next(); //middleware
}
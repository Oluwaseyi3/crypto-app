exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
      sucess: true,
      data: "You've got access to this private route"
  })
}  
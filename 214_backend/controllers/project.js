"use strict";

var Project = require("../models/project");
var fs = require("fs");

var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "Soy la HOME",
    });
  },
  test: function (req, res) {
    return res.status(200).send({
      message: "Soy TEST",
    });
  },
  saveProject: function (req, res) {
    var project = new Project();
    var params = req.body;

    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    project.save((err, projectStored) => {
      if (err)
        return res.status(500).send({
          message: "Error al guardar el documento",
        });
      if (!projectStored)
        return res.status(404).send({
          message: "No se ha podido guardar el projecto",
        });
      return res.status(200).send({
        project: projectStored,
      });
    });
  },
  getProject: function (req, res) {
    var projectId = req.params.id;

    if (projectId == null)
      return res.status(404).send({
        message: "El projecto no existe",
      });

    Project.findById(projectId, (err, project) => {
      if (err)
        return res.status(500).send({
          message: "Error al consultar el documento",
        });
      if (!project)
        return res.status(404).send({
          message: "El projecto no existe",
        });
      return res.status(200).send({
        project: project,
      });
    });
  },
  getProjects: function (req, res) {
    Project.find({})
      .sort("-year")
      .exec((err, projects) => {
        if (err)
          return res.status(500).send({
            message: "Error al devolver los datos",
          });
        if (!projects)
          return res.status(404).send({
            message: "No existen projectos para mostrar",
          });

        return res.status(200).send({ projects });
      });
  },
  updateProject: function (req, res) {
    var projectId = req.params.id;
    var update = req.body;

    Project.findByIdAndUpdate(
      projectId,
      update,
      { new: true },
      (err, projectUpdate) => {
        if (err)
          return res.status(500).send({
            message: "Error al actualizar",
          });
        if (!projectUpdate)
          return res.status(404).send({
            message: "No existe el projecto a actualizar",
          });
        return res.status(200).send({
          project: projectUpdate,
        });
      }
    );
  },
  deleteProject: function (req, res) {
    var projectId = req.params.id;

    Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
      if (err)
        return res.status(500).send({
          message: "No se ha podido eliminar el proyecto",
        });
      if (!projectRemoved)
        return res.status(404).send({
          message: "No se puede eliminar el proyecto",
        });
      return res.status(200).send({
        project: projectRemoved,
      });
    });
  },
  uploadImage: function (req, res) {
    var projectId = req.params.id;
    var fileName = "Imagen no subida";
    var filePath, fileSplit, extSplit, fileExt;

    if (req.files) {
      filePath = req.files.image.path;
      fileSplit = filePath.split("\\");
      fileName = fileSplit[1];
      extSplit = fileName.split(".");
      fileExt = extSplit[1];

      if (/^(jpg|png|jpeg|gif)$/i.test(fileExt)) {
        Project.findByIdAndUpdate(
          projectId,
          { new: true },
          { image: fileName },
          (err, projectUpdate) => {
            if (err)
              return res
                .status(500)
                .send({ message: "La imagen no se ha cargado" });
            if (!projectUpdate)
              return res.status(404).send({ message: "El proyecto no existe" });
            return res.status(200).send({ project: projectUpdate });
          }
        );
      } else {
        fs.unlink(filePath, (err) => {
          return res.status(200).send({
            message: "La extensión no es válida",
          });
        });
      }
    } else
      return res.status(200).send({
        message: fileName,
      });
  },
};

module.exports = controller;

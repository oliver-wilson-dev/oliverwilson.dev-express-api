module.exports = {
  title: encodeURI('education'),
  universityName: encodeURI('the university of kent'),
  courseName: { precedingInformation: encodeURI('Bachelor of Science in'), name: encodeURI('computer science') },
  degreeClassification: { precedingInformation: encodeURI('Classification'), name: encodeURI('first') },
  content: [
    '🎓I studied at the University of Kent for three years (2014 -2017) and obtained a first class degree with honours in Computer Science upon my graduation.',
    'During my studies I worked on a number of exciting front end projects and really enjoyed the creativity that developing software for the web afforded me.',
  ].map(paragraph => encodeURI(paragraph)),
};

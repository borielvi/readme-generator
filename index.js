//const { writeToFile, copyToFile } = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const profileDataArgs = process.argv.slice(9, process.argv.length);
const titleOfProject = profileDataArgs[0];
const projectDescription = profileDataArgs[1];
const tableOfContents = profileDataArgs[2];
const installation = profileDataArgs[3];
const usage = profileDataArgs[4];
const license = profileDataArgs[5];
const contributing = profileDataArgs[6];
const tests = profileDataArgs[7];
const questions = profileDataArgs[8];
//const generateMarkdown = require('./potential-enigma/README.md');
// array of questions for user
const whatQuestions = [ 
    'What is the project title?', 'What is the description?', 'what is the installation instructions?', 'What is the usage information?', 'What is the contribution guidelines?', 'What is the test instructions?', 'What is my github username?', 'What is my email address?'
];

const promptQuestion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is your project title? (Required)',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
    ])   
}

const promptProject = (questionPrompts = []) => {
    console.log("questions");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Table of Contents:',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter table of contents!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is installation guidelines?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Enter installation guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your usage? (Required)',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is your license?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Enter license badge!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who are the contributors?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Enter contributors!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'What tests were ran?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Enter tests performed!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Do you have any questions?',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Enter questions, and contact information!');
                    return false;
                }
            }
        },
    ])
}

promptQuestion()
    .then(promptProject)
    .then(questionPrompts =>{
        return generateMarkdown(questionPrompts)
    })
    .then(pageReadMe => {
        return writeToFile(pageReadMe);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
        return copyToFile();
    })
    .then(copyToFileResponse => {
        console.log(copyToFileResponse);
    })
    .catch(err => {
        console.log(err);
    })

const generateMarkdown = (genMarkDown) => {
    module.exports = {
        genMarkDown: genMarkDown,
        opp: true
    };
    //console.log(genMarkDown);
};

//function to write README file
const writeToFile = fileContent => {
    // return new Promise((resolve, reject) => {
    //     //fs.
    //     writeToFile('./potential-enigma/README.md', fileContent, err => { 
    //         if (err) {
    //             reject(err);
    //             return;
    //         };

    //         resolve( {
    //             ok: true,
    //             message: 'file created!'
    //         });
    //     });
    // });

}

const copyToFile = fileContent => {

}

const readMePage = generateMarkdown()

// function to initialize program
function init(writeToFile) {


}

// function call to initialize program
init();

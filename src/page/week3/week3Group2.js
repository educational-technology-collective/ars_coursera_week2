import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ToggleButtonGroup from '../../components/ToggleButtonGroup';
import CodeDisplay from '../../components/CodeDisplay';
import ChatGPTHint from '../../components/ChatGPTHint';
import EditorForm from '../../components/EditorForm';
import Typography from '@mui/material/Typography';

function Week3Group2() {
    const [showChatGPTHint, setShowChatGPTHint] = React.useState(true);
    const correctCode = "def student_grades():\n" + "    import re\n" + "    with open (\"assets/grades.txt\", \"r\") as file:\n" + "        grades = file.read()\n" + "\n" + "    ### BEGIN SOLUTION\n" + "    pattern = re.compile(r'\\w+\\s\\w+(?=: B)')\n" + "    matches = re.findall(pattern,grades)\n" + "\n" + "    # Alternative answers: \n" + "    # pattern = \"\"\"(?P<test>\\w+\\s+\\w+): B\"\"\"\n" + "    \n" + "    ### END SOLUTION   \n" + "\n" + "    return matches  \n" + "    \n";
    const incorrectCode = "def logs():\n" + "    import re\n" + "    with open(\"assets/logdata.txt\", \"r\") as file:\n" + "        logdata = file.read()\n" + "    \n" + "    ### FIX CODE BELOW    \n" + "    pattern = \"(?P<host>[0-9]+[.][0-9]+[.][0-9]+[.][0-9]+)\n" + "    (-) (?P<name>[a-z]+[0-9]*)\n" + "    (?P<time>[[0-9]*/[A-Z]+[a-z]*/[0-9]*:[0-9]+:[0-9]*:[0-9]* -[0-9]*])\n" + "    (?P<request>\\\"[A-Z]* (.+?) (.+?)) \"\n" + "\n" + "    logs = []\n" + "    ### FIX CODE ABOVE\n" + "\n" + "    for i in re.finditer(pattern, logdata):\n" + "        logs.append(i.groupdict())\n" + "\n" + "    # YOUR CODE HERE\n" + "\n" + "    return logs\n" + "\n" + "logs()";

    const [hint, setHint] = React.useState(/* ... (same as before) ... */);

    React.useEffect(() => {
        const firstVisit = localStorage.getItem('firstVisit');
        if (!firstVisit) {
            setOpen(true);
            localStorage.setItem('firstVisit', '1');
        }
    }, []);

    const [showSecondPart, setShowSecondPart] = React.useState(false);
    const [revisedHint, setRevisedHint] = React.useState(''); // For the revised hint

    const handleInitialSubmit = (event) => {
        event.preventDefault();
        setShowSecondPart(true);
    };

    const handleFinalSubmit = (event) => {
        event.preventDefault();

        // Handle feedback submission (you can combine original hint and revised hint)
        // submitFeedback(hint)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        const route = '/survey';
        window.location.href = route;
    };

    return (
        <Stack spacing={2}>
            <Box p={3}>
                <Typography variant="h4" gutterBottom>
                    Assignment 3 Question 4 Reflection Activity
                </Typography>
                <Typography paragraph style={{fontSize: 18}}>
                    Let's proceed with the task now!
                </Typography>
                                <Typography paragraph style={{ fontSize: 18 }}>
                    To remind you, Question 4 of Assignment 3 , which was based on the data on parking tickets in Ann Arbor, was as follows:
                </Typography>

                <Typography paragraph
                            style={{fontStyle: 'italic', fontSize: 18}}>
                    Count for the number of Michigan vehicles with plates in the
                    following formats that have received a ticket:

                    <ul style={{listStyleType: 'disc', marginLeft: '10px'}}>
                        <li>ABC1234</li>
                        <li>ABC123</li>
                        <li>123ABC</li>
                        <li>Vanity Plates (i.e. anything other than the
                            aforementioned formats)
                        </li>
                    </ul>
                </Typography>

                <Typography paragraph style={{fontStyle: 'italic', fontSize: 18}}>
                    Complete the function <code> fine_per_plates() </code> returning a dictionary. The dictinary should be formatted as follows:
                    <code> {JSON.stringify({
                        "ABC1234":10,
                        "ABC123":15,
                        "123ABC":17,
	                    "vanity":3
                    })}</code>
                </Typography>

                <Typography paragraph style={{fontStyle: 'italic', fontSize: 18 }}>
                    What is the most common make of car which received tickets from the state of NY? The answer should be a string.
                </Typography>


                <Typography paragraph style={{fontSize: 18}}>
                    Please go through Solution A and identify the mistakes in
                    it. You can compare with Solution B, which is correct. Assume that all the relevant libraries such as pandas and NumPy are already imported, even if you don’t see that in Solution A.

                </Typography>
            </Box>

            <Grid container spacing={2} bgcolor="#f5f5f5">
                <Grid item xs={6}>
                    <CodeDisplay
                        code={correctCode}
                        title={"Solution A (Incorrect)"}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CodeDisplay
                        code={incorrectCode}
                        title={"Solution B (Correct)"}
                    />
                </Grid>
            </Grid>

            <Typography paragraph style={{fontSize: 18}}>
                <b>What hint would you provide to a student who wrote Solution A
                    to help them fix their code?</b>
            </Typography>

            <Typography paragraph style={{fontSize: 18}}>
                Remember, the goal is to help them understand their mistake and
                lead them to the correct solution rather than solving their
                problem completely.
            </Typography>

            <EditorForm hint={hint} setHint={setHint}/>

            {showSecondPart ? (
                <>
                    <Typography paragraph style={{fontSize: 18}}>
                        Here is the hint provided by ChatGPT for Solution A.
                    </Typography>
                    <ChatGPTHint showChatGPTHint={showChatGPTHint}/>
                    <Typography paragraph style={{fontSize: 18}}>
                        Go through the hint that you originally wrote and
                        compare it with the ChatGPT hint. Verify the correctness
                        of the ChatGPT hint and check if there is anything
                        missing in either of the hints.
                    </Typography>
                    <Typography paragraph style={{fontSize: 18}}>
                        <b> Now, rewrite a hint for Solution A. </b>
                    </Typography>
                    <EditorForm hint={revisedHint}
                                setHint={setRevisedHint}/> {/* Separate EditorForm for the revised hint */}
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Button onClick={handleFinalSubmit}
                                    variant="contained" color="primary">
                                Submit Final Hint
                            </Button>
                        </Grid>
                        <Grid item>
                            <ToggleButtonGroup
                                showChatGPTHint={showChatGPTHint}
                                setShowChatGPTHint={setShowChatGPTHint}
                            />
                        </Grid>
                    </Grid>
                </>
            ) : (
                <Grid container
                      justifyContent="flex-start"> {/* This line is changed to justifyContent="flex-start" */}
                    <Grid item>
                        <Button onClick={handleInitialSubmit}
                                variant="contained" color="primary">
                            Next
                        </Button>
                    </Grid>
                </Grid>
            )}
        </Stack>
    );
}

export default Week3Group2;

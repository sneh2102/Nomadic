# CSCI 5709 Grp-10



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.cs.dal.ca/snehp/csci-5709-grp-10.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.cs.dal.ca/snehp/csci-5709-grp-10/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Deployment

To publish your website after completing the setup and following all the steps mentioned above, you can follow these instructions:

1. Log in to Netlify using your GitHub account.
2. Choose the repository you wish to deploy.
3. Once you have selected the repository, Netlify will automatically deploy your website.

## Built With

* [React](https://reactjs.org/) - Frontend Framework
* [NPM](https://www.npmjs.com/) - The package manager for  [Node](https://nodejs.org/)
* [Visual Studio Code](https://code.visualstudio.com/download) - The source code editor used
* [Netlify](https://www.netlify.com/) - For application deployment
* [GitHub](https://github.com/) - The version control tool
* [Google Chrome](https://www.google.com/intl/en_in/chrome/) - Browser used to visualize the changes

## External Dependencies Used
[@mui/icons-material](https://mui.com/material-ui/material-icons/)- `^5.15.20`
- Material-UI is a popular React UI framework. The `@mui/icons-material` package provides a collection of icons that can be used in Material-UI applications.

[@mui/material](https://mui.com/components/)- `^5.15.20`
- MUI Core components are a suite of high-quality, reusable UI components based on Material Design.

[react-router-dom](https://reactrouter.com/) - `^6.23.1`
- React Router DOM provides routing functionalities for React applications, allowing for declarative routing.

[tailwind](https://tailwindcss.com/)- `^3.4.4`
- Tailwind CSS is a highly customizable, low-level CSS framework that provides utility classes for building responsive and modern user interfaces.

[react-hook-form](https://react-hook-form.com/)- `^7.52.0`
 * React Hook Form is a library for managing form state in React using hooks.

[Typescript](https://www.typescriptlang.org)- `^4.9.5`
- Typescript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing and other features to JavaScript, making it more robust and scalable for large-scale applications.

[react-slick](https://www.npmjs.com/package/react-slick)- `^0.30.2`
-   React Slick is a carousel component for React applications.
 * It provides a simple and customizable way to create image sliders, carousels, and other similer UI Component 

## Sources Used
### frontend/src/components/FAQ.tsx
*Lines 113 -124
```js
<Accordion
    key={index}
    expanded={expanded === `panel${index}`}
    onChange={handleChange(`panel${index}`)}
>
<AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
    <Typography>{faq.question}</Typography>
</AccordionSummary>
<AccordionDetails>
    <Typography>{faq.answer}</Typography>
</AccordionDetails>
</Accordion>
```
This code is adapted from [Material UI](https://mui.com/material-ui/react-accordion/) as shown below
```js
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
```

## Acknowledgments
* The provided code was instrumental in getting started with the assignment. I would like to express my gratitude to all the authors for their hard work.

## References

- [1]“unDraw | Colorful illustrations,” Undraw.co, 2019. (Online) Available: https://undraw.co/illustrations (accessed Jun. 24, 2024).
- [2]“React Accordion component - Material UI,” mui.com. (Online)  Available: https://mui.com/material-ui/react-accordion/ (accessed Jun. 24, 2024).
- [3]“Travel World Tour Vector PNG Images, Tour And Travel Logo, Tour, Travel, Logo PNG Image For Free Download,” Pngtree. (Online) Available:https://pngtree.com/freepng/tour-and-travel-logo_5695483.html (accessed Jun. 25, 2024).
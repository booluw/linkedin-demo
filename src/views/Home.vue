<template>
  <main class="row">
    <div class="col-5">
      <section class="profile">
        <div class="profile__bg"></div>
        <div class="profile__base">
          <div class="profile__flex profile__flex--margin">
            <img src="@/assets/img/avatar.jpg" class="profile__avatar"/>
            <i class="material-icons no-desktop --shift">more_vert</i>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="profile__text">
                <div class="profile__flex">
                  <h3 class="heading--desktop-light heading--desktop-big">Ibukun Stephen Olusola</h3>
                  <span class="text--faint">2nd</span>
                </div>
                <div class="">
                  <p class="text--medium-sized">
                    Programs and People Manager at Gbedu
                  </p>
                  <div class="profile__flex text--mobile-faint text--v-small no-desktop">
                    <span>
                      Moshood Abiola Polytechnic
                    </span>
                    <span>
                      Triangle Africa
                    </span>
                  </div>
                  <div class="profile__flex profile__flex--desktop-spaced text--mobile-faint">
                    <span>
                      Nigeria
                    </span>
                    <span>
                      500+ connections
                    </span>
                    <a href="#" class="no-mobile">Contact info</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2 move-up-container">
              <div class="profile__btns">
                <button class="btn btn--primary">Connect</button>
                <button class="btn">
                  <i class="material-icons">lock</i>
                  Message
                </button>
                <button class="btn btn--secondary no-mobile">
                  More...
                </button>
              </div>
              <div class="profile__flex profile__flex--column no-mobile">
                <div class="profile__flex">
                  <img src="@/assets/img/triangle.png" class="__img"/>
                  <a href="#" class="text--small-sized">
                    Triangle Africa
                  </a>
                </div>
                <div class="profile__flex">
                  <img src="@/assets/img/institute.png" class="__img"/>
                  <a href="#" class="text--small-sized">
                    Moshood Abiola Polytechnic
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr class="profile__rule no-desktop" />
          <p class="profile__paragraph no-desktop">
            The daily goal is getting the job done quickly and efficiently.
          </p>
        </div>
      </section>
      <section class="profile">
        <div class="profile__base">
          <h3 class="heading--light">Highlights</h3>
          <br />
          <div class="row">
            <div class="col-3">
              <div class="profile__flex">
                <img src="@/assets/img/prosper.jpg" class="img--round img--small" />
                <a href="#" class=" text--faint">
                  <b>1 mutual connection</b>
                  <p class="text--light text--small">
                    You and Ibukun Stephen both know Prosper Otemuyiwa
                  </p>
                </a>
              </div>
            </div>
            <div class="col-3 no-mobile">
              <div class="profile__flex profile__flex--top">
                <img src="@/assets/img/comment.png" class="img--small" />
                <a href="#" class="text--faint">
                  <b>Reach out to Ibukun Stephen for...</b>
                  <p class="text--light text--small">
                    Contracting and freelancing, Mentoring, Paid consulting.
                  </p>
                  <br />
                  <button class="btn">Message Ibukun Stephen</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="profile no-mobile">
        <div class="profile__base">
          <h3 class="heading--light">About</h3>
          <br />
          <p class="text--v-small">The daily goal is getting the job done quickly and efficiently.</p>
        </div>
      </section>
      <section class="profile">
        <div class="profile__base">
          <h3 class="heading--light">Activity</h3>
          <p class="text--v-small">
            2,662 followers
          </p>
          <br />
          <p class="text--v-small">
            Posts Ibukun Stephen created, shared, or commented on in the last 90 days are displayed here.
          </p>
        </div>
        <a href="#" class="profile__more-btn text--mobile-uppercase">See all <span class="no-mobile">activity</span></a>
      </section>
      <section class="profile">
        <div class="profile__base">
          <h3 class="heading--light">Experience</h3>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/triangle.png" class="img--small" />
            <div class="m-left--small border--bottom">
              <h4>Programs Manager</h4>
              <p class="text--v-small">Triangle Africa</p>
              <p class="text--v-small text--faint col-3" style="margin: 0 0 1.5rem;">
                Aug 2019 – Present * 1 yr 4 mos
                <br />
                Nigeria
              </p>
              <p class="text--v-small">
                Triangle Africa is a non-profit educational resource provider addressing unemployability problems by building a community of Innovative Individuals in Africa and preparing them for the Future of Work.
              </p>
            </div>
          </div>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small border--bottom" style="flex-basis: 100%;">
              <h4>Programs and People Manager</h4>
              <p class="text--v-small">Gbedu</p>
              <p class="text--v-small text--faint col-3" style="margin: 0 0 1.5rem;">
                Sept 2019 – Present * 1 yr 4 mos
                <br />
                Lekki, Lagos
              </p>
            </div>
          </div>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/triangle.png" class="img--small" />
            <div class="m-left--small" style="flex-basis: 100%;">
              <h4>Communications Manager</h4>
              <p class="text--v-small">RockSpace Nigeria</p>
              <p class="text--v-small text--faint col-3" style="margin: 0 0 1.5rem;">
                Aug 2018 – Aug 2019 - 1 yr 1 mo
                <br />
                Ogun, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="profile">
        <div class="profile__base">
          <h3 class="heading--light">Education</h3>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small border--bottom" style="flex-basis: 100%;">
              <h4>Moshood Abiola Polytechnic</h4>
              <p class="text--v-small">HND - Computer Science</p>
              <p class="text--v-small text--faint col-3" style="margin: 0 0 1.5rem;">
                2011 – 2016
              </p>
            </div>
          </div>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small border--bottom" style="flex-basis: 100%;">
              <h4>Muslim High School, Isolu</h4>
              <br /><br />
            </div>
          </div>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small" style="flex-basis: 100%;">
              <h4>African Church Grammer School</h4>
              <br /><br />
            </div>
          </div>
        </div>
      </section>
      <section class="profile">
        <div class="profile__base">
          <h3 class="heading--light">Licenses & certifications</h3>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small border--bottom" style="flex-basis: 100%;">
              <h4>Android App. Development Course</h4>
              <p class="text--v-small">
                Andela <br />
                Sep 2017 - No Expiration Date
              </p>
            </div>
          </div>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small" style="flex-basis: 100%;">
              <h4>Cloud Computing and Off-site Data Backup</h4>
              <p class="text--v-small">
                Lagos Chamber of Commerce and Industry
                <br />
                May 2017 - No Expiration Date
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="profile">
        <div class="profile__base">
          <h3 class="heading--light">Volunteer experience</h3>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small border--bottom" style="flex-basis: 100%;">
              <h4>Vice President</h4>
              <p class="text--v-small">Student Against Violence Everywhere (SAVE)</p>
              <p class="text--v-small text--faint" style="margin: 0;">
                Jan 2013 - Dec 2013 | 12 mos
              </p>
            </div>
          </div>
          <br />
          <div class="profile__flex profile__flex--top">
            <img src="@/assets/img/institute.png" class="img--small" />
            <div class="m-left--small" style="flex-basis: 100%;">
              <h4>Learning Community Ambassador ALC</h4>
              <p class="text--v-small">Andela</p><p class="text--v-small text--faint" style="margin: 0;">
                May 2018 – Aug 2019 | 1 yr 4 mos
                <br />
                Science and Technology
              </p>
              <br />
              <p class="text--v-small">
                Organize and Facilitate Android Learning Community (ALC) meetups
                Mentor ALC Learners on their online engagement platforms
                Follow up with the progress of ALC Learners
                Help unblock ALC Learners from all their various challenges
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="profile no-mobile">
        <div class="profile__base">
          <h3 class="heading--light">Skills & endorsements</h3>
          <div class="border--bottom">
            <br />
            <h4 class="heading--light">
              Project Management<span class="text--faint text--light">| 2</span>
            </h4>
            <p class="text--v-small m-top--small">
              <b>Damilola Ogunfowora and 1 connection</b> have given endorsements for this skill
            </p>
          </div>
          <br />
          <div class="border--bottom">
            <h4 class="heading--light">
              Data Analysis<span class="text--faint text--light">| 5</span>
            </h4>
            <p class="text--v-small m-top--small">
              <b>Damilola Ogunfowora and 4 connections</b> have given endorsements for this skill
            </p>
          </div>
          <br />
          <div>
            <h4 class="heading--light">
              Digital Marketing <span class="text--faint">| 6</span>
            </h4>
            <br />
            <div class="text--v-small m-top--small profile__flex">
              <img src="@/assets/img/triangle.png" class="img--v-small"/>
              <p>
                Endorsed by <b> 2 of Ibukun Stephen’s colleagues at KUTA Art Foundation</b>
              </p>
            </div>
          </div>
        </div>
        <a href="#" class="profile__more-btn text--mobile-uppercase">Show more <i class="material-icons">keyboard_arrow_down</i></a>
      </section>
    </div>
    <div class="col-2 no-mobile">
      Ads
    </div>
  </main>
</template>

<script>
export default {
  
}
</script>
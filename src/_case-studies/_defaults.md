---
title:
case_study_status_understanding:
lead_organization:
featured_image:

timeline:
  first_test_date:
  latest_update_date:

problem: true
process: true
impact: true
who: false

sections:
---

{% if page.problem %}
<section class="overflow-visible">
  <div class="container">
    <div class="row case-study-label">
      <div class="col-12 col-lg-4 || d-block  text-lg-right ">
        <div class="sticky-top ">
          <h2 class="editable h1">Problem</h2>
          <div class="editable"></div>
        </div>
      </div>
      <div class="col-12 col-lg-8 ">
        <div class="editable">
          Enter details...
        </div>
      </div>

    </div>
  </div>
</section>
{% endif %}

{% if page.process %}
<section class="bg-grey overflow-visible">
  <div class="container">
    <div class="row case-study-label">
      <div class="col-12 col-lg-4 case-study-label d-flex text-lg-right flex-column">
        <div class="sticky-top">
          <h2 class="editable h1">Process/Method</h2>
          <div class="editable"></div>
        </div>

      </div>
      <div class="col-12 col-lg-8">
        <div class="editable">
          Enter details...
        </div>
      </div>
    </div>
  </div>
</section>
{% endif %}

{% if page.impact %}
<section class="overflow-visible">
  <div class="container">
    <div class="row case-study-label">
      <div class="col-12 col-lg-4 || case-study-label || d-block text-lg-right">
        <div class="sticky-top">
          <h2 class="editable h1">Output & Impact</h2>
          <div class="editable"></div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="editable">
          Enter details...
        </div>
      </div>
    </div>
  </div>
</section>
{% endif %}

<section class="bg-grey overflow-visible">
  <div class="container">
    <div class="row case-study-label">
      <div class="col-12 col-lg-4 case-study-label d-block text-lg-right">
        <div class="sticky-top">
          <h2 class="editable h1">Digital Standard Mapping</h2>
          <div class="editable"></div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="editable">Enter mapping description...</div>
      </div>
    </div>
    {% include mapping.html %}

  </div>
</section>


{% if page.who %}
  <section class="overflow-visible">
    <div class="container">
      <div class="row case-study-label">
        <div class="col-12 col-lg-4 case-study-label d-block text-lg-right">
          <h2 class="editable h1">Who was involved?</h2>
          <div class="editable"></div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="editable">
            Add details...
          </div>
        </div>
      </div>
    </div>
  </section>
{% endif %}
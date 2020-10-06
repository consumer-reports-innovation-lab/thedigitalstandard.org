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

areas:
---

{% if page.problem %}
<section>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4 text-lg-right ">
        <div class="sticky-top ">
          <h2 class="editable h1">Problem</h2>
          <div class="editable"></div>
        </div>
      </div>
      <div class="col-12 col-lg-8 ">
        <div class="editable mt-3">
          Enter details...
        </div>
      </div>
    </div>
  </div>
</section>
{% endif %}

{% if page.process %}
<section class="bg-grey">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4 text-lg-right">
        <div class="sticky-top">
          <h2 class="editable h1">Process/Method</h2>
          <div class="editable"></div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="editable mt-3">
          Enter details...
        </div>
      </div>
    </div>
  </div>
</section>
{% endif %}

{% if page.impact %}
<section>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4 text-lg-right">
        <div class="sticky-top">
          <h2 class="editable h1">Output & Impact</h2>
          <div class="editable"></div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="editable mt-3">
          Enter details...
        </div>
      </div>
    </div>
  </div>
</section>
{% endif %}

<section class="bg-grey">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-4 text-lg-right">
        <div class="sticky-top">
          <h2 class="editable h1">Digital Standard Mapping</h2>
          <div class="editable"></div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="editable mt-3">Enter mapping description...</div>
      </div>
    </div>
    {% include mapping.html %}

  </div>
</section>


{% if page.who %}
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 text-lg-right">
          <h2 class="editable h1">Who was involved?</h2>
          <div class="editable"></div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="editable mt-3">
            Add details...
          </div>
        </div>
      </div>
    </div>
  </section>
{% endif %}
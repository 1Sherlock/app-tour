package uz.soft.cosmos.apptourserver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import uz.soft.cosmos.apptourserver.entity.template.AbstractEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Tour extends AbstractEntity {
    private String nameUz;
    private String nameRu;
    private String nameEn;

    @Column(columnDefinition = "text")
    private String shortDescUz;
    @Column(columnDefinition = "text")
    private String shortDescRu;
    @Column(columnDefinition = "text")
    private String shortDescEn;

    @Column(columnDefinition = "text")
    private String descriptionUz;
    @Column(columnDefinition = "text")
    private String descriptionRu;
    @Column(columnDefinition = "text")
    private String descriptionEn;

    @ManyToOne(fetch = FetchType.LAZY)
    private Attachment photo;

    @Column(nullable = false, unique = true)
    private String url;


}

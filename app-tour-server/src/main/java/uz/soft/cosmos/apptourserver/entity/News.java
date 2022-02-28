package uz.soft.cosmos.apptourserver.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uz.soft.cosmos.apptourserver.entity.template.AbstractEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class News extends AbstractEntity {
    private String titleUz;
    private String titleRu;
    private String titleEn;

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

    @Column(nullable = false, unique = true)
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    private Attachment photo;
}
